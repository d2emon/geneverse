class Scalable:
    def __init__(self, name, size, scale=1):
        while size > 10:
            scale += 1
            size /= 10

        self.name = name
        self.size = size
        self.scale = scale

    def __repr__(self):
        return "{} ({}*10^{}m)".format(self.name, self.size, self.scale)
